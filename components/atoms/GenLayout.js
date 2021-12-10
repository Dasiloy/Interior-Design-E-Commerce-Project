import PageHead from "./PageHead";

function GenLayout({ children, title, content }) {
  return (
    <div>
      <PageHead title={title} content={content} />
      {children}
    </div>
  );
}

export default GenLayout;
