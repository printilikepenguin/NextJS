import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get("path");

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
      },
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_URL}/${path}?language=ko&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error("An error occurred");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({
      error: e instanceof Error ? e.message : "An error occurred",
    });
  }
}
