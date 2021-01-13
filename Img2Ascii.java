import java.awt.Color;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;

public class Img2Ascii {

    public static void convertToAscii() {
        BufferedImage img;
        double pixval;
        try {
            img = ImageIO.read(System.in);
        } catch (Exception e) {
            System.out.println("Failed to load image");
            return;
        }

        for (int i = 0; i < img.getHeight(); i++) {
            for (int j = 0; j < img.getWidth(); j++) {
                Color pixcol = new Color(img.getRGB(j, i));
                pixval = (((pixcol.getRed() * 0.30) + (pixcol.getBlue() * 0.59) + (pixcol
                        .getGreen() * 0.11)));
                System.out.print(strChar(pixval));
            }
            System.out.println("");
        }
    }

    public static String strChar(double g) {
        String str = " ";
        if (g >= 240) {
            str = " ";
        } else if (g >= 210) {
            str = ".";
        } else if (g >= 190) {
            str = "*";
        } else if (g >= 170) {
            str = "+";
        } else if (g >= 120) {
            str = "^";
        } else if (g >= 110) {
            str = "&";
        } else if (g >= 80) {
            str = "8";
        } else if (g >= 60) {
            str = "#";
        } else {
            str = "@";
        }
        return str;
    }

    public static void main(String[] args) {
        convertToAscii();

    }
}