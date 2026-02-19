const Rating = ({ rating, total, icon }: { rating: number; total: number; icon?: string }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i}>
          {icon ? (
            <img
              src={icon}
              alt="rating icon"
              className={`w-4 h-4 ${i < rating ? '' : 'opacity-30'}`}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={i < rating ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.29a1 1 0 00.95.69h6.6c.969 0 1.371 1.24.588 1.81l-5.347 3.89a1 1 0 00-.364 1.118l2.036 6.29c.3.921-.755 1.688-1.54 1.118l-5.347-3.89a1 1 0 00-1.176 0l-5.347 3.89c-.784.57-1.838-.197-1.54-1.118l2.036-6.29a1 1 0 00-.364-1.118l-5.347-3.89c-.783-.57-.38-1.81.588-1.81h6.6a1 1 0 00.95-.69l2.036-6.29z"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rating;
