"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  getMe,
  createAnnouncement,
  uploadFile,
  type User,
  type UploadedFile,
} from "@/lib/services";
import { getS3Url } from "@/const";
import { X, Upload, Image as ImageIcon, FileText, File as FileIcon } from "lucide-react";


interface AnnouncementFormData {
  title: string;
  content: string;
  isImportant: boolean;
}

export default function CreateAnnouncementPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AnnouncementFormData>({
    defaultValues: {
      title: "",
      content: "",
      isImportant: false,
    },
  });

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await getMe();
      setUser(userData);
      setIsLoading(false);
    } catch {
      // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
      alert("로그인이 필요합니다.");
      router.push("/login");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      const uploadPromises = Array.from(files).map((file) => uploadFile(file));
      const uploadedResults = await Promise.all(uploadPromises);
      setUploadedFiles((prev) => [...prev, ...uploadedResults]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "파일 업로드에 실패했습니다.";
      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return ImageIcon;
    } else if (fileType.includes("pdf")) {
      return FileText;
    } else {
      return FileIcon;
    }
  };

  const isImage = (fileType: string) => {
    return fileType.startsWith("image/");
  };

  const onSubmit = async (data: AnnouncementFormData) => {
    if (!user) return;

    try {
      // 파일 URL들을 content에 추가
      let finalContent = data.content;
      if (uploadedFiles.length > 0) {
        const fileUrls = uploadedFiles
          .map((file) => {
            const url = getS3Url(file.fileKey);
            return `${file.originalName}: ${url}`;
          })
          .join("\n");
        finalContent = `${data.content}\n\n[첨부 파일]\n${fileUrls}`;
      }

      await createAnnouncement({
        ...data,
        content: finalContent,
        authorId: user.id,
      });

      alert("공지사항이 등록되었습니다.");
      router.push("/announcements");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "공지사항 등록에 실패했습니다.";
      alert(errorMessage);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              공지사항 작성
            </h1>
            <p className="text-gray-600">새로운 공지사항을 작성합니다.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 제목 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                제목 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("title", {
                  required: "제목을 입력해주세요",
                  minLength: {
                    value: 2,
                    message: "제목은 2자 이상이어야 합니다",
                  },
                })}
                disabled={isSubmitting}
                placeholder="제목을 입력해주세요"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all ${
                  errors.title
                    ? "border-red-300 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* 내용 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("content", {
                  required: "내용을 입력해주세요",
                  minLength: {
                    value: 10,
                    message: "내용은 10자 이상이어야 합니다",
                  },
                })}
                disabled={isSubmitting}
                placeholder="내용을 입력해주세요"
                rows={10}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 transition-all resize-none ${
                  errors.content
                    ? "border-red-300 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* 중요 공지 체크박스 */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isImportant"
                {...register("isImportant")}
                disabled={isSubmitting}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="isImportant"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                중요 공지로 표시
              </label>
            </div>

            {/* 파일 업로드 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                파일 첨부
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  disabled={isSubmitting || isUploading}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-3"></div>
                      <p className="text-gray-600">업로드 중...</p>
                    </>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-gray-400 mb-3" />
                      <p className="text-gray-600 mb-1">
                        클릭하여 파일을 선택하세요
                      </p>
                      <p className="text-sm text-gray-500">
                        이미지, PDF, 문서 등 모든 파일 형식 지원
                      </p>
                    </>
                  )}
                </label>
              </div>

              {/* 업로드된 파일 목록 */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    업로드된 파일 ({uploadedFiles.length})
                  </p>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => {
                      const FileIconComponent = getFileIcon(file.fileType);
                      return (
                        <div
                          key={index}
                          className="relative group border rounded-lg p-3 hover:shadow-md transition-shadow flex items-center gap-3"
                        >
                          <div className="flex-shrink-0">
                            {isImage(file.fileType) ? (
                              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                                <ImageIcon className="w-6 h-6 text-blue-500" />
                              </div>
                            ) : (
                              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                                <FileIconComponent className="w-6 h-6 text-gray-500" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">
                              {file.originalName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.fileSize / 1024).toFixed(1)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="flex-shrink-0 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 버튼 */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-br from-[#7ba5d6] to-[#6b95c6] hover:from-[#6b95c6] hover:to-[#5b85b6] text-white rounded-lg shadow-md hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "등록 중..." : "등록하기"}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                disabled={isSubmitting}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold disabled:opacity-50"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

