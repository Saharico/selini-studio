export type CursorMode = {
  label?: string;
  active?: boolean;
};

export function cursorEnter(label?: string) {
  window.dispatchEvent(new CustomEvent<CursorMode>("cursor:mode", { detail: { label, active: true } }));
}

export function cursorLeave() {
  window.dispatchEvent(new CustomEvent<CursorMode>("cursor:mode", { detail: { active: false } }));
}
