local opt = vim.opt

opt.relativenumber = true

opt.number = true

--tabs & indenting
opt.tabstop = 2
opt.shiftwidth = 2
opt.expandtab = true
opt.autoindent = true 

-- line wrapping
opt.wrap = false

--search setting 
opt.ignorecase = true
opt.smartcase = true

--cuser line
opt.cursorline = true

--apperance
opt.termguicolors = true 
opt.background = "dark"
opt.signcolumn = "yes"

--backspace
opt.backspace = "indent,eol,start"

--clipboard
opt.clipboard:append("unnamedplus")

--split windows
opt.splitright = true
opt.splitbelow = true 

opt.iskeyword:append("_")

