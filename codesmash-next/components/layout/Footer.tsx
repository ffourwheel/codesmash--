export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#17161a] py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.94rem] text-white/80">
          
          {/* Left Side: Copyright */}
          <div className="text-center md:text-left">
            <p>
              &copy; 2017 - {currentYear},{' '}
              <a 
                href="https://www.codesmash.co.th/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#d90a2c] transition-colors duration-400"
              >
                CODESMASH CO., LTD.
              </a>
            </p>
          </div>

          {/* Right Side: Rights Reserved */}
          <div className="text-center md:text-right uppercase tracking-wider text-sm">
            <p>All RIGHTS RESERVED</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
