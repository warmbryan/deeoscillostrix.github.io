import { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
	FaBluesky,
	FaDiscord,
	FaFacebookF,
	FaInstagram,
	FaMastodon,
	FaSteam,
	FaTelegram,
	FaTumblr,
	FaTwitch,
	FaYoutube,
} from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineCatchingPokemon } from "react-icons/md";
// import { PiButterflyFill } from "react-icons/pi";
import { SiKofi } from "react-icons/si";
import { TbCardsFilled } from "react-icons/tb";

const iconMap: { [key: string]: { iconImport: IconType; dataTip: string } } = {
	telegram: { iconImport: FaTelegram, dataTip: "Telegram" },
	discord: { iconImport: FaDiscord, dataTip: "Discord" },
	instagram: { iconImport: FaInstagram, dataTip: "Instagram" },
	youtube: { iconImport: FaYoutube, dataTip: "YouTube" },
	twitch: { iconImport: FaTwitch, dataTip: "Twitch" },
	steam: { iconImport: FaSteam, dataTip: "Steam" },
	tumblr: { iconImport: FaTumblr, dataTip: "Tumblr" },
	mastodon: { iconImport: FaMastodon, dataTip: "Mastodon" },
	bluesky: { iconImport: FaBluesky, dataTip: "Bluesky" },
	kofi: { iconImport: SiKofi, dataTip: "Ko-fi" },
	facebook: { iconImport: FaFacebookF, dataTip: "Facebook" },

	switch: { iconImport: BsNintendoSwitch, dataTip: "Switch Friend Code" },
	pokemonGo: {
		iconImport: MdOutlineCatchingPokemon,
		dataTip: "Pokémon GO",
	},
	pokemonSleep: { iconImport: GiNightSleep, dataTip: "Pokémon Sleep" },
	pokemonTCGP: { iconImport: TbCardsFilled, dataTip: "Pokémon TCGP" },
};

export default iconMap;
