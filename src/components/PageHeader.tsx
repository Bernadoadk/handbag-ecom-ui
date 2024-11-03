interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && <p className="text-xl text-gray-600">{description}</p>}
      </div>
    </div>
  );
}