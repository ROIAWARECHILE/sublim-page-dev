"use client";
import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    const expand = () => { ring.classList.add(styles.expand); dot.classList.add(styles.hide); };
    const shrink = () => { ring.classList.remove(styles.expand); dot.classList.remove(styles.hide); };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor='expand']").forEach(el => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
