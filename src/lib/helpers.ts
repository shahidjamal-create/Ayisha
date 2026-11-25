// Small helper functions used across the website.
import { WEDDING } from "./wedding-data";

// The current page address — used for sharing (no phone number needed).
export function pageUrl() {
  return typeof window !== "undefined" ? window.location.href : "";
}

// Ready-to-forward invitation message for WhatsApp / copy-paste.
export function invitationText() {
  return [
    "Assalamu Alaikum Warahmatullahi Wabarakatuh",
    "",
    WEDDING.bismillah,
    "",
    `${WEDDING.hostName}`,
    WEDDING.hostLine,
    WEDDING.hostInvite,
    "",
    `${WEDDING.brideName}, ${WEDDING.brideDegree}`,
    WEDDING.brideLine,
    "",
    "with",
    "",
    `${WEDDING.groomName}, ${WEDDING.groomDegree}`,
    WEDDING.groomLine,
    "",
    "Insha' Allah — NIKAH",
    `On ${WEDDING.dateText} (${WEDDING.hijriDate}) at 12:15 PM`,
    `at ${WEDDING.nikah.venue}, Vaniyambadi.`,
    "",
    "VALIMA — Lunch After Zohar Prayer",
    `at ${WEDDING.valima.venue}, ${WEDDING.valima.address}`,
    "",
    "Your gracious presence and duas are requested.",
    "JazakAllahu Khairan.",
  ].join("\n");
}

// Opens WhatsApp share (guest chooses who to send it to — no number stored).
export function shareOnWhatsApp() {
  const text = `${invitationText()}\n\nView the digital invitation:\n${pageUrl()}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

// Copy any text to the clipboard. Returns true when it worked.
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

function toICSDate(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

// Downloads a .ics file so guests can add the event to any calendar app.
export function downloadCalendar(kind: "nikah" | "valima") {
  const isNikah = kind === "nikah";
  const summary = isNikah
    ? "Nikah — Ayisha & Tahir"
    : "Valima (Lunch) — Ayisha & Tahir";
  const location = isNikah
    ? "Masjid-e-Khaderpet, Vaniyambadi"
    : "Miyan Shadi Mahal, Mattekar Street, Muslimpur, Vaniyambadi";
  const description = isNikah
    ? "Nikah of K. Ayisha Tayyiba, B.Sc. with A. Tahir Faizan, B.C.A. Insha' Allah. 2nd Rajjab 1448 Hijri."
    : "Valima lunch after Zohar prayer for the wedding of Ayisha & Tahir. Time shown in this calendar entry is indicative — lunch follows the Zohar prayer.";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ayisha Tahir Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${kind}-ayisha-tahir-2026@wedding`,
    `DTSTAMP:${toICSDate(new Date().toISOString())}`,
    `DTSTART:${toICSDate(isNikah ? WEDDING.nikahISO : WEDDING.valimaISO)}`,
    `DTEND:${toICSDate(isNikah ? WEDDING.nikahEndISO : WEDDING.valimaEndISO)}`,
    `SUMMARY:${summary}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = isNikah ? "Ayisha-Tahir-Nikah.ics" : "Ayisha-Tahir-Valima.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// "Add to Google Calendar" link for the Nikah.
export function googleCalendarUrl(kind: "nikah" | "valima") {
  const isNikah = kind === "nikah";
  const text = encodeURIComponent(
    isNikah ? "Nikah — Ayisha & Tahir" : "Valima (Lunch) — Ayisha & Tahir"
  );
  const start = toICSDate(isNikah ? WEDDING.nikahISO : WEDDING.valimaISO);
  const end = toICSDate(isNikah ? WEDDING.nikahEndISO : WEDDING.valimaEndISO);
  const location = encodeURIComponent(
    isNikah
      ? "Masjid-e-Khaderpet, Vaniyambadi"
      : "Miyan Shadi Mahal, Mattekar Street, Muslimpur, Vaniyambadi"
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&location=${location}`;
}

// Smoothly scrolls to a section id, e.g. scrollToId("invitation").
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
