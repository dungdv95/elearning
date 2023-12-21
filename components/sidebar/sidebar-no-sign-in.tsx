import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStoreDialog } from "../login-dialog";

const navigation = [
  { name: "GIỚI THIỆU", href: "/introduce", current: true },
  { name: "KHÓA HỌC", href: "/courses", current: false },
  { name: "AFFILIATE", href: "/affiliate", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function SidebarNoSignIn() {
  const pathName = usePathname();
  const setOpenLogin = useStoreDialog((state) => state.setOpen);

  const handleRegister = () => {};

  const handleLogin = () => {
    setOpenLogin(true);
  };

  return (
    <div className="flex justify-between px-[52px] py-[14px]">
      <div className="flex items-center">
        <Image
          src="/asset/logo.png"
          alt=""
          width={38}
          height={38}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex items-center gap-5">
        <nav className="flex gap-5 items-center" aria-label="Global">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                pathName === item.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "inline-flex items-center rounded-md py-1 px-3 text-sm font-semibold"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div
            className={classNames(
              "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
              "inline-flex items-center rounded-md py-1 px-3 text-sm font-semibold cursor-pointer"
            )}
            onClick={handleRegister}
          >
            ĐĂNG KÝ
          </div>
          <div
            className={classNames(
              "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
              "inline-flex items-center rounded-md py-1 px-3 text-sm font-semibold cursor-pointer"
            )}
            onClick={handleLogin}
          >
            ĐĂNG NHẬP
          </div>
        </nav>
      </div>
    </div>
  );
}