import { useState } from "react";
import { apiRequest } from "../constants/apiRequest";
import fullRecipeQuery from "../constants/graphQL/fullRecipe";
import { popularRecipes } from "../constants/graphQL/popularRecipes";

export const useAPIRequest = () => {
  const [loading, setLoading] = useState(true);

  const getRecipeByID = async (id: string) => {
    setLoading(true);
    try {
      const res = apiRequest({
        data: {
          query: fullRecipeQuery,
          variables: { id },
        },
      });

      return res;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getPopularRecipes = async () => {
    setLoading(true);
    try {
      const res = await apiRequest({
        data: { query: popularRecipes },
      });

      const data = !res.error
        ? res.data?.popularRecipes?.edges?.map((edge: any) => edge?.node)
        : [];

      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    getRecipeByID,
    getPopularRecipes,
    loading,
  };
};

export const getRecipeByID = async (id: string) => {
  try {
    const res = await apiRequest({
      data: {
        query: fullRecipeQuery,
        variables: { id },
      },
    });
    return res.data?.recipe;
  } catch (error) {}
};
