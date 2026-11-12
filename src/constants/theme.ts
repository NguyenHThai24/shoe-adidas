// ─── Z-INDEX LAYERS ───────────────────────────────────────────
// Tăng dần từ dưới lên. Chỉnh tại đây, áp dụng toàn app.
export const Z = {
  canvas:  0,   // Three.js / 2D canvas nền
  content: 10,  // Nội dung trang
  header:  100, // Header luôn trên cùng
} as const

// ─── HEADER ───────────────────────────────────────────────────
export const HEADER_HEIGHT  = 68  // px — chiều cao thanh header
export const HEADER_TOP     = 16  // px — khoảng cách từ mép trên màn hình
// Nội dung trang bắt đầu sau: HEADER_TOP + HEADER_HEIGHT + gap
export const CONTENT_TOP    = HEADER_TOP + HEADER_HEIGHT + 12

// ─── BRAND COLORS ─────────────────────────────────────────────
export const COLOR = {
  greenPrimary:   '#2E7D32',
  greenLight:     '#7BC67E',
  greenPale:      '#e8f5e9',
  greenAccent:    '#4CAF50',
  gold:           '#F5A623',
  textDark:       '#1b1b1b',
  textMuted:      '#888',
} as const
