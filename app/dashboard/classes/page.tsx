const classes = [
  { id: 1, name: 'Algebra I', teacher: 'Ms. Anderson' },
  { id: 2, name: 'World History', teacher: 'Mr. Brown' }
];

export default function ClassesPage() {
  return (
    <section>
      <h1>Classes</h1>
      <table>
        <thead>
          <tr><th>Class</th><th>Teacher</th></tr>
        </thead>
        <tbody>
          {classes.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
