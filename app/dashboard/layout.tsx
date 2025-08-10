import Link from 'next/link';
import { ReactNode } from 'react';
import './dashboard.css';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li><Link href="/dashboard">Overview</Link></li>
            <li><Link href="/dashboard/students">Students</Link></li>
            <li><Link href="/dashboard/teachers">Teachers</Link></li>
            <li><Link href="/dashboard/classes">Classes</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
