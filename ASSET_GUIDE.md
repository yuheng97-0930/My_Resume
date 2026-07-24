# Portfolio asset guide

Place each file inside the matching path under `public/`. Keep the filenames
exactly as listed so the website can detect and display the assets without code
changes.

## Profile

- `public/assets/profile/profile-photo.jpg`
  - Recommended ratio: 4:5 portrait
  - Recommended size: at least 1200 x 1500 pixels

## UniSmart

- `public/assets/projects/unismart/unismart-cover.png`
- `public/assets/projects/unismart/unismart-ai-assistant.png`
- `public/assets/projects/unismart/unismart-attendance-scanner.png`
- `public/assets/projects/unismart/unismart-attendance-analytics.png`
- `public/assets/projects/unismart/unismart-timetable.png`
- `public/assets/projects/unismart/unismart-subject-registration.png`
- `public/assets/projects/unismart/unismart-lecturer-attendance.png`
- `public/assets/projects/unismart/unismart-staff-management.png`

## CampusGo MY

- `public/assets/projects/campusgo/campusgo-cover.png`
- `public/assets/projects/campusgo/campusgo-schedule.png`
- `public/assets/projects/campusgo/campusgo-map.png`

## IoT Rover

- `public/assets/projects/iot-rover/iot-rover-cover.png`
- `public/assets/projects/iot-rover/iot-rover-controls.png`
- `public/assets/projects/iot-rover/iot-rover-hardware.jpg`

## Hangman

- `public/assets/projects/hangman/hangman-cover.png`
- `public/assets/projects/hangman/hangman-gameplay.png`

## Resume

- `public/resume.pdf`

The current resume buttons use email requests until the real PDF is added.
After adding it, change both resume links in `app/page.tsx` to `/resume.pdf` and
add the `download` attribute if the file should download immediately.
