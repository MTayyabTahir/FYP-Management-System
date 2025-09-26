export default function StudentResult() {
  // Dummy student result
  const student = {
    title: "Sarcasm detection",
    arid: "21-ARID-417",
    name: "Hamid Mazhar",
    midPoster: 7.5,
    supMarks: 6,
    midTotal: 13.5,
    eval1: 8,
    eval2: 7,
    total: 28.5,
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Student Result</h1>

      {/* Student Info Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {student.name} ({student.arid})
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Project Title:</strong> {student.title}
        </p>

        {/* Marks Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700">Poster</p>
            <p className="text-gray-800 text-lg">{student.midPoster}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700">Supervisor Marks</p>
            <p className="text-gray-800 text-lg">{student.supMarks}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700">Mid Total</p>
            <p className="text-gray-800 text-lg">{student.midTotal}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700">Evaluator I</p>
            <p className="text-gray-800 text-lg">{student.eval1}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700">Evaluator II</p>
            <p className="text-gray-800 text-lg">{student.eval2}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow-md">
            <p className="font-semibold text-green-800">Total</p>
            <p className="text-green-900 text-xl font-bold">{student.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
