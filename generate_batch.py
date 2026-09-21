#!/usr/bin/env python3
import os
import subprocess
import sys
import time
from pathlib import Path

CODEX_IMG_DIR = Path.home() / ".codex" / "generated_images"
TARGET_DIR = Path("/Users/sym/code/the-creation-variants/images")
TARGET_DIR.mkdir(parents=True, exist_ok=True)

ITEMS = [
    (
        "14-philosopher-and-truth.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an ancient Greek philosopher in classical draped robes reclines on stone steps emerging from Plato's dark cave, extending his right index finger upwards. On the right, floating in a brilliant celestial halo of pure radiant divine geometric light and clouds, the winged goddess of Truth and Enlightenment reaches down extending her luminous hand. Center composition has their fingertips almost touching with an incandescent spark of wisdom and truth. 16:9 aspect ratio, cracked Renaissance plaster fresco texture."
    ),
    (
        "15-primitive-and-fire.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an early prehistoric human hunter clad in rough furs reclines on a rugged rocky Pleistocene earth, extending his weathered hand to the right. On the right, floating in a stormy sky enveloped in swirling crimson billowing drapery and lightning clouds, the titan Prometheus or a heavenly fire spirit extends a radiant flaming fingertip towards the human. In the center, their fingertips are inches apart, igniting the very first divine spark of fire and civilization. 16:9 aspect ratio, cracked Renaissance fresco texture."
    ),
    (
        "16-calligrapher-and-dragon.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an ancient Eastern master calligrapher in traditional flowing scholar robes reclines on a mountain plateau holding a bamboo brush, extending an outstretched index finger to the right. On the right, hovering in the sky amidst swirling misty ink clouds and celestial scrolls, a majestic Chinese dragon formed entirely of dynamic flowing black calligraphy ink and brushstrokes extends its sharp clawed finger towards the master. Fingertips almost touch in the center with a splash of luminous ink Qi. 16:9 aspect ratio, Renaissance fresco merged with traditional East Asian ink wash texture."
    ),
    (
        "17-child-and-gaia.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an innocent young child in simple linen clothes reclines on a green grassy meadow of wildflowers, extending a tiny gentle index finger towards the right. On the right, floating in a majestic living canopy of ancient tree branches, blooming moss, vines, and crystal waterfalls, Mother Nature Gaia with emerald eyes reaches out a hand sculpted from living wood and flowering blossoms towards the child. Center composition features their fingertips about to touch with a shimmering bioluminescent green life spark. 16:9 aspect ratio, Renaissance fresco cracked texture."
    ),
    (
        "18-freediver-and-whale.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a human freediver in a sleek wetsuit reclines gracefully in deep sunlit turquoise ocean water, extending an outstretched hand towards the right. On the right, suspended in the luminous ocean depths surrounded by schools of shimmering fish and divine sunbeams filtering through water, a colossal ancient humpback whale gently extends its massive pectoral fin tip towards the diver's finger. In the center, their contact point almost touches with a glowing aquatic spark of interspecies harmony. 16:9 aspect ratio, Renaissance fresco underwater texture."
    ),
    (
        "19-ranger-and-rhino.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a tired wildlife conservation ranger in khaki field uniform reclines on the golden savanna grass under an acacia tree, extending a compassionate finger towards the right. On the right, floating in a warm golden African sunset cloud surrounded by birds in flight, a majestic ancient northern white rhino gently lowers its grand horned head and reaches forward towards the ranger's hand. Fingertips almost touch the rhino horn in the center with a gentle golden sunset spark of preservation and coexistence. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "20-botanist-and-sequoia.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an 19th-century naturalist botanist with field notebook and magnifying glass reclines on the mossy forest floor, extending an eager index finger towards the right. On the right, emerging from the misty heart of a towering 3000-year-old giant redwood sequoia tree enveloped in emerald forest haze, an ancient dryad tree spirit carved of ancient red bark reaches out a living wooden hand towards the botanist. In the center, their fingertips almost touch with an amber sap-gold spark of timeless nature. 16:9 aspect ratio, Renaissance cracked fresco texture."
    ),
    (
        "21-cyberpunk-and-neon-deity.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a cyberpunk street netrunner with cybernetic optic implants and a leather trenchcoat reclines on a wet neon-reflective rooftop, extending his human left index finger towards the right. On the right, floating in a dark smoggy sky between towering megacity skyscrapers, a colossal transcendent holographic neon synthetic deity with glowing geometric halos reaches out a giant hand of pure violet-cyan laser light towards the runner. Center fingertips are inches apart, igniting with a high-voltage neon electric spark. 16:9 aspect ratio, Renaissance fresco cracked plaster mixed with cyberpunk neon."
    ),
    (
        "22-little-prince-and-rose.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, Antoine de Saint-Exupéry's Little Prince with his iconic green coat, yellow scarf fluttering in space, reclines on the grassy curve of asteroid B-612, extending his small hand towards the right. On the right, floating in the deep starry cosmos surrounded by miniature volcanic clouds and constellations, his beloved radiant crimson Rose inside an ethereal crystal aura extends an elegant curved stem and velvet petal towards the Prince's finger. In the center, their fingertips almost touch with a starlight spark of pure love. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "23-timetraveler-and-future-self.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a vibrant young 20-year-old human reclines on a green hill, extending a smooth youthful index finger towards the right. In the center, a vertical shimmering chronological mirror ripple divides time. On the right, floating in a cosmic mantle of swirling clock dials and golden hourglass sands, the same person as an 80-year-old wise elder with silver hair and wrinkles reaches back across time with a weathered hand. In the center, their fingertips meet across the temporal ripple with a temporal quantum spark. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "24-alice-and-cheshire-cat.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, Alice in her iconic blue Victorian dress and white apron reclines on oversized checkered Wonderland mushrooms, extending her curious index finger towards the right. On the right, floating in a whimsical twilight dreamscape surrounded by curling smoke rings and playing cards, the mysterious Cheshire Cat with striped fur and giant glowing crescent smile extends a soft, semi-translucent starry cat paw towards Alice. In the center, their fingertip and paw pad almost touch with a whimsical sparkle of dream magic. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "25-alchemist-and-philosophers-stone.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a medieval alchemist in velvet scholar robes surrounded by alembics, furnaces, and arcane manuscripts reclines on stone flooring, extending his hand towards the right. On the right, floating in a divine golden-crimson cloud of celestial fumes and sacred geometry diagrams, the glowing mythical Philosopher's Stone (Magnum Opus) hovers, extending a beam of transmutation ruby-red light towards the alchemist's finger. Center composition has their fingertips almost touching with a transmutation spark turning lead to gold. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "26-child-and-grandfather.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a chubby, innocent toddler infant in white linen reclines on a soft sunlit grassy knoll, extending a tiny delicate baby finger towards the right. On the right, enveloped in a warm golden cloud of nostalgic family memories and sepia twilight, an 85-year-old grandfather with gentle smiling eyes and snow-white hair extends his weathered, loving, wrinkled hand towards the child. Center composition features the tiny baby finger and grandfather's weathered finger about to touch with a tender warm spark of generational love. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "27-solodweller-and-cat.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a modern young adult in comfortable loungewear reclines on a cozy bedroom rug at warm sunset, extending an outstretched index finger towards the right. On the right, lounging upside down on a cloud-like plush cushion surrounded by floating dust motes in the golden hour light, a cute fluffy tabby cat reaches out its fluffy foreleg, extending its soft pink toe-bean paw pad towards the human's finger. In the center, human fingertip and cat paw pad are millimeters apart with a tiny adorable golden spark. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "28-barista-and-morning-sunbeam.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a dedicated barista wearing an artisan canvas apron with espresso machine and latte pitcher nearby reclines against a marble counter, extending a hand to the right. On the right, streaming through high cathedral-like cafe windows in a magnificent golden aura of floating coffee aroma and steam clouds, Apollo or the personification of Morning Dawn extends a ray of pure morning sunlight towards the barista. In the center, the barista's finger and the sunbeam meet above a steaming cup of coffee with a bright morning spark. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "29-doctor-and-newborn.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, an obstetrician surgeon in surgical scrubs and sterile gloves reclines beside a sterile medical basin, extending a gentle gloved index finger to the right. On the right, floating in a divine warm celestial cradle surrounded by ethereal soft white light and medical guardian angels, a newborn baby just born into the world reaches out with its tiny instinctual grasping hand towards the doctor's finger. In the center, their fingertips meet with an intense, sacred golden spark of new life and the gift of birth. 16:9 aspect ratio, Renaissance fresco texture."
    ),
    (
        "30-architect-and-sky-city.png",
        "Generate a brand new image from scratch using your image generation tool: Michelangelo Sistine Chapel fresco The Creation of Adam style parody: On the left, a visionary architect with architectural drafting compass and blueprints reclines on a high urban scaffolding, extending an outstretched index finger towards the right. On the right, floating in the celestial clouds illuminated by the rising sun, a magnificent futuristic floating solar sky-city with vertical gardens and soaring crystal spires reaches down its lowest spire tip towards the architect's finger. In the center, their contact point ignites with a brilliant blue holographic spark of future human creation. 16:9 aspect ratio, Renaissance fresco texture."
    )
]

def get_existing_dirs():
    if not CODEX_IMG_DIR.exists():
        return set()
    return {p for p in CODEX_IMG_DIR.iterdir() if p.is_dir()}

def generate_one(filename, prompt):
    target_file = TARGET_DIR / filename
    if target_file.exists() and target_file.stat().st_size > 10000:
        print(f"[SKIP] {filename} already exists ({target_file.stat().st_size} bytes)")
        return True

    print(f"\n==========================================")
    print(f"[START] Generating {filename}...")
    print(f"==========================================")

    before_dirs = get_existing_dirs()

    cmd = [
        "codex", "-c", "notify=[]", "exec", "--skip-git-repo-check",
        prompt
    ]

    try:
        proc = subprocess.run(
            cmd,
            cwd="/Users/sym/code",
            capture_output=True,
            text=True,
            timeout=180
        )
        print(f"Codex returncode: {proc.returncode}")
    except subprocess.TimeoutExpired:
        print(f"Timeout generating {filename}")
        return False
    except Exception as e:
        print(f"Error running codex: {e}")
        return False

    after_dirs = get_existing_dirs()
    new_dirs = after_dirs - before_dirs

    candidate_files = []
    if new_dirs:
        for d in sorted(new_dirs, key=lambda x: x.stat().st_mtime, reverse=True):
            candidate_files.extend(list(d.glob("*.png")) + list(d.glob("*.jpg")))

    if not candidate_files:
        # Fallback: check most recent file in CODEX_IMG_DIR
        all_imgs = list(CODEX_IMG_DIR.glob("*/*.png")) + list(CODEX_IMG_DIR.glob("*/*.jpg"))
        if all_imgs:
            all_imgs.sort(key=lambda p: p.stat().st_mtime, reverse=True)
            if time.time() - all_imgs[0].stat().st_mtime < 180:
                candidate_files.append(all_imgs[0])

    if candidate_files:
        best_img = candidate_files[0]
        print(f"Found image: {best_img} -> copying to {target_file}")
        import shutil
        shutil.copy2(best_img, target_file)
        print(f"[SUCCESS] Saved {target_file} ({target_file.stat().st_size} bytes)")
        return True
    else:
        print(f"[FAILED] Could not find newly generated image for {filename}")
        return False

def main():
    success_count = 0
    total = len(ITEMS)
    for idx, (filename, prompt) in enumerate(ITEMS, 1):
        print(f"\n[{idx}/{total}] Processing {filename}...")
        ok = generate_one(filename, prompt)
        if ok:
            success_count += 1
        else:
            print(f"Retry once for {filename}...")
            time.sleep(2)
            if generate_one(filename, prompt):
                success_count += 1
        time.sleep(1)

    print(f"\n==========================================")
    print(f"Done! {success_count}/{total} images generated.")
    print(f"==========================================")

if __name__ == "__main__":
    main()
