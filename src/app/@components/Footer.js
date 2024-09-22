import React from "react";

function footer() {
  return (
    <div>
      <footer className="p-5 bg-emerald-900 text-center text-white font-satisfy">
        <p>&copy; {(new Date).getFullYear()} My Simple Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default footer;
