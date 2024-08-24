import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-6">
      <Link href="/admin/addBlog" className="block mb-4 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded p-2">
        Add blogs
      </Link>
      <Link href="/admin/blogList" className="block mb-4 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded p-2">
        Blog lists
      </Link>
      <Link href="/admin/subscriptions" className="block mb-4 text-lg font-semibold text-gray-700 hover:bg-gray-200 rounded p-2">
        Subscriptions
      </Link>
    </div>
  );
};

export default Sidebar;
