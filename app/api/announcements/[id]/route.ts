import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: 특정 공지사항 조회
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: '유효하지 않은 ID입니다.' },
        { status: 400 }
      );
    }

    const announcement = await prisma.announcement.findUnique({
      where: { id },
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

    if (!announcement) {
      return NextResponse.json(
        { success: false, message: '공지사항을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // 조회수 증가
    await prisma.announcement.update({
      where: { id },
      data: { viewCount: { increment: 1 } },
    });

    return NextResponse.json({
      success: true,
      data: {
        ...announcement,
        viewCount: announcement.viewCount + 1,
      },
    });
  } catch (err) {
    console.error('Get announcement error:', err);
    const errorMessage = err instanceof Error ? err.message : '공지사항 조회에 실패했습니다.';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

// DELETE: 공지사항 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: '유효하지 않은 ID입니다.' },
        { status: 400 }
      );
    }

    await prisma.announcement.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: '삭제되었습니다.',
    });
  } catch (err) {
    console.error('Delete announcement error:', err);
    const errorMessage = err instanceof Error ? err.message : '삭제에 실패했습니다.';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

