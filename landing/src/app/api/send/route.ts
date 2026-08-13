import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // 1. Verificación de la API Key en las variables de entorno
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: "Falta configurar RESEND_API_KEY" },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { firstName, lastName, email, message, company, tel, country, city } = body;


        // 2. Envío del correo
        const { data, error } = await resend.emails.send({
            from: "Qontrol <hello@theqontrol.com>",
            to: ["hello@theqontrol.com"],
            replyTo: email,
            subject: `Nuevo mensaje de ${firstName} ${lastName}`,
            // 💡 Llamamos al componente como función para no usar sintaxis JSX (<.../>)
            react: EmailTemplate({
                firstName,
                lastName,
                email,
                message,
                company,
                tel,
                country,
                city,
            }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json(data, { status: 200 });

    } catch (err) {
        return NextResponse.json(
            { error: "Error interno en el servidor" },
            { status: 500 }
        );
    }
}