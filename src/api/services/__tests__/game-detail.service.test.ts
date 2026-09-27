import { api } from "@/api/axios/axios.ts";
import { getGameDetails } from "@/api/services/game-detail.service.ts";
import { mockDetailResponse, mockGameDetail } from "@/api/services/mocks/game-detail.mock.ts";

// MOCKEAMOS RESPONSE DE API PARA TODOS LOS TESTS (OPCION 1)
// jest.mock("@/api/axios/axios", () => ({
//   api: {
//     get: jest.fn().mockImplementation(() => Promise.resolve({ data: mockDetailResponse }))
//   }
// }));
// SI LO DEFINES DENTRO DE LOS TESTS, AL MENOS DEBES HACER EL jest.mock DE LA RUTA DEL MÓDULO
jest.mock("@/api/axios/axios");

describe("getGameDetails", () => {
  const mockApiGet = jest.mocked(api.get);

  beforeEach(() => {
    // MOCKEAMOS RESPONSE DE API PARA TODOS LOS TESTS (OPCION 2)
    mockApiGet.mockReturnValue(Promise.resolve({ data: mockDetailResponse }));
  });

  it("should map the response detail", async () => {
    const response = await getGameDetails("123");

    expect(response).toEqual(mockGameDetail);
  });

  it("should not have background image", async () => {
    mockApiGet.mockReturnValue(
      Promise.resolve({ data: { ...mockDetailResponse, background_image: undefined } })
    );

    const response = await getGameDetails("123");

    expect(response.poster).not.toEqual(mockDetailResponse.background_image);
  });
});
