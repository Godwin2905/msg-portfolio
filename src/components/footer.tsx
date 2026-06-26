const Footer = () => {
  return (
    <footer>
      <div className="py-6 text-center dk-safe-x-padding border-t border-gray">
        <p className="text-sm font-medium text-accent2">
          ©{new Date().getFullYear()} MSG Dev Team · UAE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
