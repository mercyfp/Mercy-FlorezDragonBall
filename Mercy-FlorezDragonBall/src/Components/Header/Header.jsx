import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a156873-a830-43b1-9b31-3becb2f788fb/dfkmcsk-6470d2d2-adb0-4a3d-8702-ba8894637969.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMTU2ODczLWE4MzAtNDNiMS05YjMxLTNiZWNiMmY3ODhmYlwvZGZrbWNzay02NDcwZDJkMi1hZGIwLTRhM2QtODcwMi1iYTg4OTQ2Mzc5NjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1JXGxApT7B-VSRQ-yeaUnWlhtQDj7NO0jF7yX25nIc4" alt="Logo React And Dragon Boll Z" />
        <h1>Dragon Ball Z</h1>
        <p>Characters</p>
        <NavBar/>
    </header>
  )
}

export default Header