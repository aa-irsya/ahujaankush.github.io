export const BasicWebContainer = ({ sectionID, children }) => {
  return (
    <section id={sectionID}>
      <div className="sec d-block d-flex">
        <div className="text w-100 h-100 mt-5">{children}</div>
      </div>
    </section>
  );
};
