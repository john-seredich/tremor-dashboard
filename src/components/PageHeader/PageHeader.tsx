import styles from "./PageHeader.module.scss";

type Props = {
  title: string;
  content: string;
};

function PageHeader({ title, content }: Props) {
  return (
    <div className={styles.page_header}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default PageHeader;
