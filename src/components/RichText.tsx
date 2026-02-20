import React from 'react';
import { PortableText } from '@portabletext/react';

export default function RichText({ value, isBlog = false }: { value: any, isBlog?: boolean }) {
    if (!value) return null;

    const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const customComponents = {
        block: {
            normal: ({ children }: any) => (
                <p className="text-slate-600 leading-relaxed mb-6 mt-0">
                    {children}
                </p>
            ),
            h2: ({ children, value }: any) => {
                const text = value.children?.map((c: any) => c.text).join('') || '';
                return (
                    <h2 id={slugify(text)} className="text-3xl font-bold text-slate-900 mt-10 mb-4">
                        {children}
                    </h2>
                );
            },
            h3: ({ children, value }: any) => {
                const text = value.children?.map((c: any) => c.text).join('') || '';
                const needsColon = isBlog && !text.endsWith(':');
                return (
                    <h3 id={slugify(text)} className="text-xl font-bold text-slate-800 mt-8 mb-3">
                        {children}{needsColon ? ':' : ''}
                    </h3>
                );
            },
            blockquote: ({ children }: any) => (
                <blockquote className="border-l-4 border-brand-500 pl-4 py-1 italic text-slate-700 bg-slate-50 my-6">
                    {children}
                </blockquote>
            ),
        },
        marks: {
            link: ({ children, value }: any) => {
                const rel = value.nofollow ? "nofollow noopener noreferrer" : "noopener noreferrer";
                return (
                    <a href={value.href} rel={rel} target="_blank" className="font-semibold text-brand-600 hover:text-brand-800 underline transition-colors">
                        {children}
                    </a>
                );
            }
        },
        list: {
            bullet: ({ children }: any) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-slate-600">
                    {children}
                </ul>
            ),
            number: ({ children }: any) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-600">
                    {children}
                </ol>
            ),
        },
    };

    return (
        <div className="rich-text-container">
            <PortableText value={value} components={customComponents} />
        </div>
    );
}
