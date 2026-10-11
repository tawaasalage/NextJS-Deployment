const stats = [
  { label: "Total users", value: "12,480", change: "+8.2%" },
  { label: "Revenue", value: "$84.2K", change: "+12.4%" },
  { label: "Active sessions", value: "2,394", change: "+4.1%" },
  { label: "Conversion", value: "6.8%", change: "+1.3%" },
];

const activity = [
  {
    title: "New sign-up",
    detail: "Alicia Brown joined the platform",
    time: "2 min ago",
  },
  {
    title: "Plan upgraded",
    detail: "Acme Corp moved to Pro",
    time: "18 min ago",
  },
  {
    title: "Support ticket",
    detail: "Escalation resolved for Beta users",
    time: "1 hour ago",
  },
  {
    title: "Report exported",
    detail: "Monthly revenue summary downloaded",
    time: "3 hours ago",
  },
];

const users = [
  {
    name: "Alicia Brown",
    email: "alicia@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Marcus Chen",
    email: "marcus@example.com",
    role: "Editor",
    status: "Pending",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    name: "Daniel Kim",
    email: "daniel@example.com",
    role: "Admin",
    status: "Inactive",
  },
];

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 24px",
        background: "#f3f4f6",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "14px",
                letterSpacing: "0.04em",
              }}
            >
              Overview
            </p>
            <h1 style={{ margin: "6px 0 0", fontSize: "36px" }}>
              Admin dashboard
            </h1>
          </div>

          <button
            style={{
              border: "none",
              borderRadius: "12px",
              background: "#111827",
              color: "#ffffff",
              padding: "12px 18px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            New report
          </button>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
              }}
            >
              <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
                {stat.label}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginTop: "18px",
                }}
              >
                <strong style={{ fontSize: "28px" }}>{stat.value}</strong>
                <span
                  style={{
                    display: "inline-block",
                    background: "#dcfce7",
                    color: "#166534",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "22px" }}>Recent activity</h2>
              <a
                href="#"
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View all
              </a>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {activity.map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "14px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div>
                    <p style={{ margin: 0, fontWeight: 700 }}>{item.title}</p>
                    <p style={{ margin: "6px 0 0", color: "#6b7280" }}>
                      {item.detail}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#6b7280",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                    }}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
            }}
          >
            <h2 style={{ margin: "0 0 18px", fontSize: "22px" }}>
              Performance
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>Engagement</span>
                <strong>72%</strong>
              </div>
              <div
                style={{
                  height: "10px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "72%",
                    height: "100%",
                    background: "#3b82f6",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>Retention</span>
                <strong>84%</strong>
              </div>
              <div
                style={{
                  height: "10px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "84%",
                    height: "100%",
                    background: "#10b981",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>Goals</span>
                <strong>63%</strong>
              </div>
              <div
                style={{
                  height: "10px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "63%",
                    height: "100%",
                    background: "#f59e0b",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "22px" }}>Users</h2>
            <button
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                background: "#f9fafb",
                color: "#111827",
                padding: "10px 12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Add user
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    textAlign: "left",
                    color: "#6b7280",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <th style={{ padding: "12px 10px" }}>Name</th>
                  <th style={{ padding: "12px 10px" }}>Role</th>
                  <th style={{ padding: "12px 10px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.email}
                    style={{ borderBottom: "1px solid #f3f4f6" }}
                  >
                    <td style={{ padding: "12px 10px" }}>
                      <div>
                        <div style={{ fontWeight: 700 }}>{user.name}</div>
                        <div style={{ color: "#6b7280", fontSize: "12px" }}>
                          {user.email}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 10px", color: "#374151" }}>
                      {user.role}
                    </td>
                    <td style={{ padding: "12px 10px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 10px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                          background:
                            user.status === "Active"
                              ? "#dcfce7"
                              : user.status === "Pending"
                                ? "#fef3c7"
                                : "#f3f4f6",
                          color:
                            user.status === "Active"
                              ? "#166534"
                              : user.status === "Pending"
                                ? "#92400e"
                                : "#374151",
                        }}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
