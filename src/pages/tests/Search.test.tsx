import { describe, expect, test, vi } from "vitest";
import Search from "../Search";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

const mockProducts = vi.hoisted(() => [
  {
    id: "ls03",
    name: "LONG SLEEVE 03",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: ["01.png"],
    description: "This oversized crewneck long-sleeved tee features a unique, heavily washed charcoal black finish, giving it a worn-in, vintage appearance. The dropped shoulder design enhances the relaxed silhouette, while exposed tonal seams along the shoulders and sleeves add a technical, edge-driven detail. Crafted from a premium heavy cotton, it offers a comfortable, structured drape, perfect for a high-concept streetwear aesthetic.",
    price: 48.00,
    category: ["TOPS", "LONG-SLEEVES"]
  }
]);

vi.mock('@/lib/products', () => ({
  products: mockProducts
}));

function renderWithQuery(query: string) {
  return render(
    <MemoryRouter initialEntries={[`/search?q=${query}`]}>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("Search results", () => {

  test('must display products that matches with the query', async () => {
    renderWithQuery("LONG SLEEVE 03");

    await waitFor(() => {
      // awaits for the loading (setTimeOut on the component)
      expect(screen.queryByTestId("search-loading")).toBeNull();
    }, { timeout: 2000 });

    expect(screen.getByText('LONG SLEEVE 03')).not.toBeNull();
  });

  test('must not display empty state when searches for a product that exists', async () => {
    renderWithQuery("LONG SLEEVE 03");

    await waitFor(() => {
      // awaits for the loading (setTimeOut on the component)
      expect(screen.queryByTestId("search-loading")).toBeNull();
    }, { timeout: 2000 });

    expect(screen.queryByTestId("search-empty-state")).toBeNull();
  });

  test('empty state when search for a product that doesnt exist', async () => {
    renderWithQuery("xxxxxxxxxxx");

    await waitFor(() => {
      // awaits for the loading (setTimeOut on the component)
      expect(screen.queryByTestId("search-loading")).toBeNull();
    }, { timeout: 2000 });

    expect(screen.queryByTestId("search-empty-state")).not.toBeNull();
  });

});