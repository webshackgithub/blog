import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

interface AuthorBioProps {
    name: string;
    role: string;
    description: string;
    avatarUrl?: string;
    socials?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
    };
}

export function AuthorBio({
    name,
    role,
    description,
    avatarUrl,
    socials,
}: AuthorBioProps) {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-6 p-6 border rounded-xl bg-card text-card-foreground">
            <Avatar className="h-16 w-16">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-lg">{name}</h3>
                        <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                    <div className="flex gap-1">
                        {socials?.github && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                        )}
                        {socials?.twitter && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                                    <Twitter className="h-4 w-4" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                            </Button>
                        )}
                        {socials?.linkedin && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
}
