interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  // console.log(title);
  return <h1>{title}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
    </div>
  );
}
