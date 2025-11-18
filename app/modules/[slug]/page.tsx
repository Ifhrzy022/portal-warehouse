// app/modules/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { MODULES } from "@/data/modules";

type Props = {
  params: {
    slug: string;
  };
};

export default function ModuleDetailPage({ params }: Props) {
  const module = MODULES.find((m) => m.slug === params.slug);

  if (!module) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/modules"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
      >
        ← Kembali ke daftar modul
      </Link>

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs inline-flex px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
              {module.level}
            </p>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">
              {module.title}
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              {module.description}
            </p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Durasi: {module.duration}</p>
            <p>{module.topics.length} topik pembahasan</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Topik yang Dipelajari
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {module.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t pt-4 text-xs text-gray-500">
          Catatan: Konten ini bersifat ilustratif untuk kebutuhan skripsi dan
          dapat dikembangkan menjadi materi yang lebih detail.
        </div>
      </div>
    </div>
  );
}
