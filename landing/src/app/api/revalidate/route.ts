import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar webhook de Sanity
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (!secret) {
      console.error("SANITY_WEBHOOK_SECRET no configurado");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 },
      );
    }

    // Aquí puedes agregar validación adicional del webhook si lo deseas

    // Revalidar tags
    revalidateTag("posts");

    if (body.document?._type === "post") {
      revalidateTag(`post-${body.document.slug?.current}`);
    }

    return NextResponse.json({
      revalidated: true,
      message: "Blog posts revalidated",
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 },
    );
  }
}
