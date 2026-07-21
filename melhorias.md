1. Adicionei fetchPriority="high" no next/image do hero
2. Corrigi o atributo sizes (estava sem — baixava imagem 3× maior)
3. Migrei a fonte do Google Fonts para next/font com adjustFontFallback
4. Troquei SSR por ISR com revalidate: 3600 na página principal
5. Envolvi o filtro de produtos em useTransition
6. Movi 3 componentes de 'use client' desnecessário para Server Components
