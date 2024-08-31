export const SectionGap = ({ height = 150, line = false }) => {
  return (
    <div
      style={{
        height: `${height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {line && (
        <hr
          style={{
            width: "100%",
            border: "1px solid #ccc",
          }}
        />
      )}
    </div>
  );
};
