import { describe, expect, test, vi } from "vitest";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "@/utils/test-utils";
import ProductCard from "../product-card";
import { Route, Routes } from "react-router-dom";

const ls03 = {
  id: "ls03",
  name: "LONG SLEEVE 03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "This oversized crewneck long-sleeved tee features a unique, heavily washed charcoal black finish, giving it a worn-in, vintage appearance. The dropped shoulder design enhances the relaxed silhouette, while exposed tonal seams along the shoulders and sleeves add a technical, edge-driven detail. Crafted from a premium heavy cotton, it offers a comfortable, structured drape, perfect for a high-concept streetwear aesthetic.",
  price: 48.00,
  category: ["TOPS", "LONG-SLEEVES"]
}

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe("product card", () => {

  test("should display product name and price", async () => {
    renderWithRouter(<ProductCard product={ls03} />);

    expect(screen.getByTestId(ls03.id + "-name-test")).not.toBeNull();
    expect(screen.getByTestId(ls03.id + "-price-test")).not.toBeNull();
  });

  test("should not display product name and price when onlyImage is true", async () => {
    renderWithRouter(<ProductCard product={ls03} onlyImage />);

    expect(screen.queryByTestId(ls03.id + "-name-test")).toBeNull();
    expect(screen.queryByTestId(ls03.id + "-price-test")).toBeNull();
  });

  test("should navigate when clicking on the product card", async () => {
    renderWithRouter(
      <Routes>
        <Route path="/" element={<ProductCard product={ls03} />} />
        <Route path="/product/:id" element={<div>Product Page</div>} />
      </Routes>
    );

    await userEvent.click(screen.queryByTestId('ls03-test')!);

    expect(await screen.findByText('Product Page')).not.toBeNull();
  });

});