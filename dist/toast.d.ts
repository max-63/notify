export interface ToastOptions {
    title?: string;
    message: string;
    duration?: number;
    type?: "success" | "error" | "warning" | "info";
    style?: "clair" | "fonce";
    icon?: boolean;
}
export declare function showToast({ title, message, duration, type, style, icon, }: ToastOptions): void;
