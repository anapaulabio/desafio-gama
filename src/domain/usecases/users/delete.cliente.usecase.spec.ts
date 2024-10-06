import DeleteClientUseCase from "./delete.usecase"

test("Teste unitário DeleteClientUsecase", async() => {
    const client = {
        userId: 1
    };
    expect(await DeleteClientUseCase.execute(client)).toBeUndefined();
});