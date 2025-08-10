const teachers = [
  { id: 1, name: 'Ms. Anderson', subject: 'Math' },
  { id: 2, name: 'Mr. Brown', subject: 'History' }
];

export default function TeachersPage() {
  return (
    <section>
      <h1>Teachers</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Subject</th></tr>
        </thead>
        <tbody>
          {teachers.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
