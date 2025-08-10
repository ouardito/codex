const students = [
  { id: 1, name: 'Alice Johnson', grade: 'A' },
  { id: 2, name: 'Bob Smith', grade: 'B' },
  { id: 3, name: 'Charlie Davis', grade: 'A' }
];

export default function StudentsPage() {
  return (
    <section>
      <h1>Students</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Grade</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
