import Link from 'next/link';
import {
  AlignCenter,
    Atom,
    Cloud,
    Github,
    LifeBuoy,
    LogOut,
    SquareMenu,
    SquareTerminal,
    User,
  } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {AvatarDemo} from "./avatar"
  import { useRouter } from 'next/navigation';
import {useDispatch} from "react-redux";
  import { logOut } from "@/service/api/apiAuthRequest";
  interface UserAccount {
    UserName: any;
  }
  export const DropdownMenuDemo: React.FC<UserAccount> = ({UserName}) => {
    const dispatch = useDispatch();
    const navigate = useRouter();

     const handleLogOut = () => {
      logOut(dispatch,navigate.push);
     }
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" bg-transparent outline-none"><AvatarDemo></AvatarDemo></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className='text-primary-bg-color text-center'>{UserName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <div className=' hidden max-lg:block'>
              <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <AlignCenter className="mr-2 h-4 w-4" />
                <span>Menu</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Link href="/courseOnline" className=" text-base font-medium">Khoá học online</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link href="/examOnline" className=" text-base font-medium">Đề thi online</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link href="/flashCard" className=" text-base font-medium">Flashcards</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link href="/activeCourse" className=" text-base font-medium">Kích hoạt khoá học</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          </div>
        
          <DropdownMenuSeparator />
          <Link href="">
          <DropdownMenuSub>
              <DropdownMenuSubTrigger>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Atom className="mr-2 h-4 w-4"></Atom>
                    <Link href="/courseOnline" className=" text-base font-medium">Front-end</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SquareTerminal className="mr-2 h-4 w-4"></SquareTerminal>
                  <Link href="/examOnline" className=" text-base font-medium">Back-end</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
           </Link>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }