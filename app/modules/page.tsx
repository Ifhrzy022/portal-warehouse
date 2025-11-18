import Link from "next/link";
import { MODULES } from "@/data/modules";

export default function ModulesPage() {
  return (
    <div className="space-y-8">
      {/* ...judul & deskripsi... */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MODULES.map((mod) => (
          <Link
            key={mod.id}
            href={`/modules/${mod.slug}`}   // ⬅️ PAKAI slug, BUKAN id
            className="group bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex px-2 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-700 mb-3">
                {mod.level}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {mod.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {mod.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>{mod.duration}</span>
              <span>{mod.topics.length} topik</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
