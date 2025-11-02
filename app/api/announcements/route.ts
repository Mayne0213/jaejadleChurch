import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: 모든 공지사항 조회
export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      include: {
        author: {
          select: {
            id: true,
            userId: true,
            userName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      data: announcements,
    });
  } catch (err) {
    console.error('Get announcements error:', err);
    const errorMessage = err instanceof Error ? err.message : '공지사항 조회에 실패했습니다.';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// POST: 새로운 공지사항 생성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, isImportant, authorId } = body;

    if (!title || !content || !authorId) {
      return NextResponse.json(
        { success: false, message: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        isImportant: isImportant || false,
        authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            userId: true,
            userName: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: announcement,
    }, { status: 201 });
  } catch (err) {
    console.error('Create announcement error:', err);
    const errorMessage = err instanceof Error ? err.message : '공지사항 생성에 실패했습니다.';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

