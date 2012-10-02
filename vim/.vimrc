vmap jk <esc>
imap jk <esc>
map <space> vw

noremap O o<esc>
"noremap h i
"noremap i k
"noremap k j
"noremap j h
set nu

call pathogen#infect()
colorscheme desert
syntax on

set sw=2 ts=2 sts=2
autocmd FileType jade :setlocal sw=2 ts=2 sts=2
autocmd FileType c :setlocal sw=8 ts=8 sts=8 

"autocmd VimEnter * NERDTree
autocmd VimEnter * wincmd p 
"autocmd VimEnter * :noremap i k
