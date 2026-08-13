import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    company?: string;
    tel?: string;
    country?: string;
    city?: string;
}

export function EmailTemplate({
                                  firstName,
                                  lastName,
                                  email,
                                  message,
                                  company,
                                  tel,
                                  country,
                                  city,
                              }: EmailTemplateProps) {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                padding: "20px",
                color: "#1a1a1a",
            }}
        >
            <h2 style={{ borderBottom: "2px solid #000", paddingBottom: "8px" }}>
                Nuevo mensaje de {firstName} {lastName}
            </h2>

            <p>
                <strong>Nombre:</strong> {firstName} {lastName}
            </p>
            <p>
                <strong>Correo:</strong>{" "}
                <a href={`mailto:${email}`} style={{ color: "#0066cc" }}>
                    {email}
                </a>
            </p>

            {tel && (
                <p>
                    <strong>Teléfono:</strong> {tel}
                </p>
            )}

            {company && (
                <p>
                    <strong>Empresa:</strong> {company}
                </p>
            )}

            {(city || country) && (
                <p>
                    <strong>Ubicación:</strong> {[city, country].filter(Boolean).join(", ")}
                </p>
            )}

            <div
                style={{
                    marginTop: "15px",
                    padding: "12px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                }}
            >
                <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Mensaje:</p>
                <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{message}</p>
            </div>
        </div>
    );
}