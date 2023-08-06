import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let json_response = {
      status: "success",
      results: "comment"
    };
    return NextResponse.json(json_response);
  }
  