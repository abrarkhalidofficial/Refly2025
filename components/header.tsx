"use client";
import React from "react";
import Link from "next/dist/client/link";
import { Edit2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "3rem",
      }}
    >
      <img src="/logoBlack.png" alt="Logo" style={{ height: "60px" }} />
      <Link
        href="#contact"
        title="Lets Talk"
        className="header__content__cta__button"
        scroll={true}
      >
        <span>Lets Talk</span>
        <div className="header__content__cta__button__icon">
          <Edit2 size={20} color="currentColor" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
