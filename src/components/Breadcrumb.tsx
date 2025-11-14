import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const items = ["Casa", "Decoração para Casa", "Decoração para Festas", "Enfeites"];

  return (
    <nav className="py-3 px-4 text-sm">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
