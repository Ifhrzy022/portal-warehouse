import supabase from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const { data: users } = await supabase.from("wp_users").select("*");
  const { data: results } = await supabase
    .from("wp_quiz_results")
    .select("score");

  const totalUsers = users?.length ?? 0;
  const totalResults = results?.length ?? 0;
  const avgScore =
    results && results.length > 0
      ? Math.round(results.reduce((a, b) => a + b.score, 0) / results.length)
      : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard Admin
      </h1>
      <p className="text-gray-600">
        Ringkasan aktivitas pembelajaran karyawan di portal warehouse.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-xs text-gray-500">Total Pengguna</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {totalUsers}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-xs text-gray-500">Total Quiz Dikerjakan</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {totalResults}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-xs text-gray-500">Rata-rata Nilai</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {avgScore}%
          </p>
        </div>
      </div>
    </div>
  );
}
