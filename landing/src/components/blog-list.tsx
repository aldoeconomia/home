"use client";

import { useState } from "react";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

interface BlogListProps {
    posts: SanityDocument[];
}

export default function BlogList({ posts }: BlogListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Separación de artículos para la retícula tipo periódico
    const heroPost = filteredPosts[0];
    const middlePosts = filteredPosts.slice(1, 3);
    const compactPosts = filteredPosts.slice(3, 10);
    const bottomPosts = filteredPosts.slice(10);

    return (
        <div className="w-full flex flex-col gap-12">
            {/* Buscador Estilo Periódico Rectangular */}
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Buscar por título o tema..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-none bg-back px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand font-monsterrat-medium text-lg transition-all"
                />
            </div>

            {filteredPosts.length > 0 ? (
                <>
                    {/* GRID PRINCIPAL TIPO PERIÓDICO (3 Columnas) */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* COLUMNA 1: NOTA PRINCIPAL (HERO) */}
                        {heroPost && (
                            <article className="lg:col-span-6 flex flex-col gap-4 group">
                                <Link href={`/blog/${heroPost.slug.current}`}>
                                    {/* Contenedor adaptado para mostrar la imagen completa */}
                                    <div className="w-full h-80 lg:h-[380px] bg-back overflow-hidden relative rounded-none flex items-center justify-center p-6">
                                        {heroPost.imageUrl ? (
                                            <img
                                                src={heroPost.imageUrl}
                                                alt={heroPost.title}
                                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-monsterrat-monsterrat text-xs uppercase tracking-widest">
                                                Sin Imagen
                                            </div>
                                        )}
                                    </div>

                                    <span className="text-xs font-monsterrat-extrabold uppercase tracking-widest text-brand mt-4 block">
                                        Destacado
                                    </span>

                                    <h2 className="text-2xl sm:text-4xl font-monsterrat-extrabold text-gray-900 leading-tight group-hover:text-brand transition-colors mt-1">
                                        {heroPost.title}
                                    </h2>

                                    {heroPost.excerpt && (
                                        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mt-3 leading-relaxed">
                                            {heroPost.excerpt}
                                        </p>
                                    )}

                                    <p className="text-xs font-monsterrat-semibold text-gray-400 mt-4">
                                        {new Date(heroPost.publishedAt).toLocaleDateString("es-MX", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </Link>
                            </article>
                        )}

                        {/* COLUMNA 2: NOTAS SECUNDARIAS APILADAS */}
                        <div className="lg:col-span-3 flex flex-col gap-8">
                            {middlePosts.map((post) => (
                                <article key={post._id} className="group flex flex-col gap-2">
                                    <Link href={`/blog/${post.slug.current}`}>
                                        <div className="w-full h-44 bg-back overflow-hidden rounded-none mb-2 flex items-center justify-center p-4">
                                            {post.imageUrl ? (
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-monsterrat-mono text-xs">
                                                    Qontrol
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-monsterrat-bold text-gray-900 group-hover:text-brand transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-xs text-gray-400 mt-2 font-monsterrat-medium">
                                            {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {/* COLUMNA 3: LISTA COMPACTA CON SCROLLBAR */}
                        <div className="lg:col-span-3 flex flex-col bg-back p-6 rounded-none">
                            <h4 className="text-xs font-monsterrat-black uppercase tracking-widest text-brand mb-4 pb-2 border-b border-gray-300">
                                Más Leídos
                            </h4>

                            <div className="max-h-[520px] overflow-y-auto pr-2 flex flex-col gap-4">
                                {compactPosts.map((post) => (
                                    <Link
                                        key={post._id}
                                        href={`/blog/${post.slug.current}`}
                                        className="group flex items-center justify-between gap-3 pb-4 border-b border-gray-200 last:border-none last:pb-0"
                                    >
                                        <div className="flex flex-col">
                                            <h5 className="text-xs sm:text-sm font-monsterrat-bold text-gray-900 group-hover:text-brand transition-colors leading-snug">
                                                {post.title}
                                            </h5>
                                            <span className="text-[10px] text-gray-400 mt-1">
                                                {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                                                    day: "numeric",
                                                    month: "short",
                                                })}
                                            </span>
                                        </div>

                                        {/* Mini Thumbnail ajustado */}
                                        <div className="w-14 h-14 shrink-0 bg-white/50 rounded-none overflow-hidden flex items-center justify-center p-1">
                                            {post.imageUrl && (
                                                <img
                                                    src={post.imageUrl}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </section>

                    {/* SECCIÓN INFERIOR: FEED DE ARTÍCULOS ADICIONALES (2 COLUMNAS) */}
                    {bottomPosts.length > 0 && (
                        <section className="w-full flex flex-col gap-6">
                            <h4 className="text-xs font-monsterrat-black uppercase tracking-widest text-brand border-b border-gray-900 pb-2">
                                Últimas Publicaciones
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {bottomPosts.map((post) => (
                                    <article
                                        key={post._id}
                                        className="group flex flex-col sm:flex-row gap-4 items-start pb-6 border-b border-gray-200"
                                    >
                                        {/* Imagen adaptada para logos sin recortes */}
                                        <div className="w-full sm:w-36 h-28 bg-back shrink-0 overflow-hidden rounded-none flex items-center justify-center p-3">
                                            {post.imageUrl && (
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                        </div>

                                        {/* Información de la nota */}
                                        <div className="flex flex-col justify-between h-full">
                                            <Link href={`/blog/${post.slug.current}`}>
                                                <h3 className="text-base font-monsterrat-bold text-gray-900 group-hover:text-brand transition-colors leading-snug">
                                                    {post.title}
                                                </h3>
                                                {post.excerpt && (
                                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                                        {post.excerpt}
                                                    </p>
                                                )}
                                            </Link>

                                            <span className="text-[11px] text-gray-400 mt-3 font-monsterrat-medium">
                                                {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            ) : (
                <div className="bg-back p-16 text-center text-gray-500 font-monsterrat-medium rounded-none">
                    No se encontraron publicaciones que coincidan con tu búsqueda.
                </div>
            )}
        </div>
    );
}