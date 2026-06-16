type ModalProps = {
  titulo: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  titulo,
  onClose,
  children,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{titulo}</h2>

          <button
            onClick={onClose}
            className="text-red-600 font-bold text-xl"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}